import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import "react-datepicker/dist/react-datepicker.css";
import { SelectChangeEvent } from "@mui/material";
import {
  DescriptionTypography,
  StyledHeading,
  TitleTypography,
} from "../styles/PageHeadingStyle";
import {
  DateTimeContainer,
  FollowUpContainer,
  StyledBtn,
  StyledBtnContainer,
  StyledLabel,
  StyledNowButton,
  StyledScheduledBtn,
  StyledSelect,
  StyledSimulateBtn,
  StyledTextField,
} from "../styles/NewEmailCompaignStyle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


//Define the shape of the form data
interface FormData {
  emailName: string;
  targetEmail: string;
  phishingEmail: string;
  landingPage: string;
  followUpEmail: {
    option1: boolean;
    option2: boolean;
  };
  launchDate: Date | null;
  timeZone: string;
  startTime: string;
}

// Define the shape of the error messages
interface Errors {
  emailName: boolean;
  targetEmail: boolean;
  phishingEmail: boolean;
  landingPage: boolean;
  launchDate: boolean;
  timeZone: boolean;
  startTime: boolean;
}

const NewEmailCompaign: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    emailName: "",
    targetEmail: "",
    phishingEmail: "",
    landingPage: "",
    followUpEmail: { option1: false, option2: false },
    launchDate: null,
    timeZone: "",
    startTime: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [timeZones, setTimeZones] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({
    emailName: false,
    targetEmail: false,
    phishingEmail: false,
    landingPage: false,
    launchDate: false,
    timeZone: false,
    startTime: false,
  });
  const theme = useTheme();

  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        const response = await fetch(
          "https://timeapi.io/api/timezone/availabletimezones"
        );
        if (!response.ok) {
          throw new Error("API request failed with status " + response.status);
        }
        const data = await response.json();
        setTimeZones(data);
      } catch (error) {
        console.error("Error fetching time zones:", error);
      }
    };

    fetchTimeZones();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSelectChange = (
    e: SelectChangeEvent<unknown>,
    field: keyof FormData
  ) => {
    setFormData({ ...formData, [field]: e.target.value as string });
    setErrors({ ...errors, [field]: false });
  };

  const handleFollowUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      followUpEmail: {
        ...formData.followUpEmail,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleLaunchDateChange = (date: Date | null) => {
    setFormData({ ...formData, launchDate: date });
    setErrors({ ...errors, launchDate: false });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {
      emailName: formData.emailName === "",
      targetEmail: formData.targetEmail === "",
      phishingEmail: formData.phishingEmail === "",
      landingPage: formData.landingPage === "",
      launchDate: showDatePicker && formData.launchDate === null,
      timeZone: showDatePicker && formData.timeZone === "",
      startTime: showDatePicker && formData.startTime === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
      setFormData({
        emailName: "",
        targetEmail: "",
        phishingEmail: "",
        landingPage: "",
        followUpEmail: { option1: false, option2: false },
        launchDate: null,
        timeZone: "",
        startTime: "",
      });
      setShowDatePicker(false);
    } else {
      console.log("Form Validation Failed");
    }
  };

  const handleNowButtonClick = () => {
    setFormData((prev) => ({
      ...prev,
      launchDate: new Date(),
    }));
    handleSubmit();
  };

  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
      },
    },
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledHeading>
            <TitleTypography variant="h4">New Email Campaign </TitleTypography>
            <DescriptionTypography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </DescriptionTypography>
          </StyledHeading>
        </Grid>

        <Grid item xs={12} md={6} mt={"10px"}>
          <StyledLabel variant="body1">Email Name:</StyledLabel>
          <StyledTextField
            fullWidth
            placeholder="Enter Email Name"
            name="emailName"
            value={formData.emailName}
            onChange={handleChange}
            error={errors.emailName}
            helperText={errors.emailName && "Email is required"}
          />
        </Grid>

        <Grid item xs={12} md={6} mt={"10px"}>
          <StyledLabel variant="body1">Target Email: </StyledLabel>
          <FormControl fullWidth error={errors.targetEmail}>
            <StyledSelect
              labelId="target-email-label"
              value={formData.targetEmail}
              onChange={(e) => handleSelectChange(e, "targetEmail")}
              displayEmpty
              IconComponent={ExpandMoreIcon}
              inputProps={{
                "aria-label": "Add Target Email",
              }}
            >
              <MenuItem value="" disabled>
                Add target email
              </MenuItem>
              <MenuItem value="Target 1">Target 1</MenuItem>
              <MenuItem value="Target 2">Target 2</MenuItem>
            </StyledSelect>{" "}
            {errors.targetEmail && (
              <FormHelperText>Target Email is required</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} mt={"10px"}>
          <StyledLabel variant="body1">Phishing Email: </StyledLabel>
          <FormControl fullWidth error={errors.phishingEmail}>
            <StyledSelect
              labelId="select-email-templete-label"
              value={formData.phishingEmail}
              onChange={(e) => handleSelectChange(e, "phishingEmail")}
              displayEmpty
              IconComponent={ExpandMoreIcon}
              inputProps={{
                "aria-label": "Select email tempelet",
              }}
            >
              <MenuItem value="" disabled>
                Select email tempelet{" "}
              </MenuItem>
              <MenuItem value="Target 1">Template 1</MenuItem>
              <MenuItem value="Target 2">Template 2</MenuItem>
            </StyledSelect>{" "}
            {errors.phishingEmail && (
              <FormHelperText>Phishing Email is required</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} mt={"10px"}>
          <StyledLabel variant="body1">Landing Page: </StyledLabel>
          <FormControl fullWidth error={errors.landingPage}>
            <StyledSelect
              labelId="select-email-templete-label"
              value={formData.landingPage}
              onChange={(e) => handleSelectChange(e, "landingPage")}
              displayEmpty
              IconComponent={ExpandMoreIcon}
              inputProps={{
                "aria-label": "Select landing page templete",
              }}
            >
              <MenuItem value="" disabled>
                Select landing page templete{" "}
              </MenuItem>
              <MenuItem value="Target 1">Template 1</MenuItem>
              <MenuItem value="Target 2">Template 2</MenuItem>
            </StyledSelect>
            {errors.landingPage && (
              <FormHelperText>Landing Page is required</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} mt={"10px"}>
          <StyledLabel variant="body1">Date and Time of Launch: </StyledLabel>
          <DateTimeContainer>
            <StyledNowButton onClick={handleNowButtonClick}>
              Now
            </StyledNowButton>
            <StyledScheduledBtn onClick={() => setShowDatePicker(true)}>
              Schedule Date & Time{" "}
            </StyledScheduledBtn>
          </DateTimeContainer>
          {showDatePicker && (
            <>
              <StyledLabel
                variant="body1"
                sx={{
                  mt: "15px",
                }}
              >
                Select Time Zone:
              </StyledLabel>
              <FormControl fullWidth error={errors.timeZone}>
                <StyledSelect
                  value={formData.timeZone}
                  onChange={(e) => handleSelectChange(e, "timeZone")}
                  displayEmpty
                  MenuProps={menuProps}
                  IconComponent={ExpandMoreIcon}
                  inputProps={{
                    "aria-label": "Select Time Zone",
                  }}
                >
                  <MenuItem value="">
                    <p>Select Time Zone</p>
                  </MenuItem>
                  {timeZones.map((zone, index) => (
                    <MenuItem key={index} value={zone}>
                      {zone}
                    </MenuItem>
                  ))}
                </StyledSelect>

                {errors.timeZone && (
                  <FormHelperText error>Time zone is required</FormHelperText>
                )}
              </FormControl>

              <Grid container spacing={2} mt={"10px"}>
                <Grid item xs={12} sm={6}>
                  <StyledLabel variant="body1" sx={{ mt: "15px" }}>
                    Start Date:
                  </StyledLabel>
                  <StyledTextField
                    fullWidth
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={
                      formData.launchDate
                        ? formData.launchDate.toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) =>
                      handleLaunchDateChange(new Date(e.target.value))
                    }
                    error={errors.launchDate}
                    helperText={errors.launchDate && "Start date is required"}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <StyledLabel variant="body1" sx={{ mt: "15px" }}>
                    Start Time:
                  </StyledLabel>
                  <StyledTextField
                    fullWidth
                    type="time"
                    placeholder="Start Time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    error={errors.startTime}
                    helperText={errors.startTime && "Start time is required"}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>

        <Grid item xs={12} md={6} mt={"10px"}>
          <StyledLabel variant="body1">Select Follow-Up Email</StyledLabel>
          <FollowUpContainer>
            <FormControlLabel
              control={
                <Checkbox
                  name="option1"
                  checked={formData.followUpEmail.option1}
                  onChange={handleFollowUpChange}
                />
              }
              label={
                <>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Option 1:
                  </Typography>
                  <Typography variant="body2">
                    Clicked link, Open Attachment or Replied to Email
                  </Typography>
                </>
              }
            />
            <FormControlLabel
              sx={{ mt: "10px" }}
              control={
                <Checkbox
                  name="option2"
                  checked={formData.followUpEmail.option2}
                  onChange={handleFollowUpChange}
                />
              }
              label={
                <>
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Option 2:
                  </Typography>
                  <Typography variant="body2">
                    Email or Contact them myself{" "}
                  </Typography>
                </>
              }
            />
            <StyledBtnContainer>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <StyledBtn>Preview Simulation Email</StyledBtn>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StyledBtn>Send Test Email </StyledBtn>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StyledSimulateBtn onClick={handleSubmit}>
                    Start Simulation Email{" "}
                  </StyledSimulateBtn>
                </Grid>
              </Grid>
            </StyledBtnContainer>
          </FollowUpContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default NewEmailCompaign;
