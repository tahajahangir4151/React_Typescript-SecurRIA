import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Email } from "../data/emailTemplateData";
import logoUrl from "../images/png-clipart-paypal-logo-paypal-blue-text-removebg-preview.png";

const EmailEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleCreateTemplate = () => {
    const newTemplate: Email = {
      from: "Account Support <example@gmail.com>",
      to: "Recipient <recipient@gmail.com>",
      date: new Date().toLocaleString(),
      subject,
      message: convertToRaw(editorState.getCurrentContent())
        .blocks.map((block) => block.text)
        .join("\n"), // Convert raw content to a plain text string
      eventOccured: `1. Log in attempts from Windows 7 - Ontario, Canada.
      2. Requesting any operation using an unusual pattern.
      3. Too many incorrect log in attempts.`,
      authenticationMessage: `For security, all your account features are disabled until a response has been received from you. Please click "Authenticate now" button below to secure your account.`,
      Regards: "Best regards, PayPal Inc Help Center",
      logoUrl: `${logoUrl}`,
    };

    // Save new template to session storage
    sessionStorage.setItem("newTemplate", JSON.stringify(newTemplate));
    // Navigate back to the email templates page
    navigate("/email-templates");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#0473E9",
          fontWeight: "bold",
          fontSize: { xs: "24px", md: "30px" },
          fontFamily: "Nunito Sans",
        }}
      >
        New Email Templates
      </Typography>
      <Typography
        color="#000000"
        mt={"10px"}
        fontSize={{ xs: "12px", md: "14px" }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Typography>
      <Box sx={{ marginTop: "30px" }}>
        <Typography
          variant="body1"
          sx={{ marginBottom: "15px", fontWeight: "bold", color: "#0473E9" }}
        >
          Subject:
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          placeholder="Enter Subject"
          name="subject"
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
            },
          }}
          InputProps={{
            sx: {
              mt: "5px",
              border: "1px solid #053065",
              height: "45px",
              borderRadius: "5px",
              "&::placeholder": {
                color: "#8E8E8E",
                opacity: 1,
                fontWeight: "500",
              },
            },
          }}
          sx={{ mb: "15px" }}
        />
      </Box>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "colorPicker",
            "history",
          ],
        }}
      />
      <Box
        sx={{
          "& .wrapperClassName": {
            border: "1px solid #053065",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            padding: "10px",
          },
          "& .editorClassName": {
            minHeight: "200px", // Set a minimum height for the editor
            padding: "10px",
            border:"1px solid black",
            fontSize: "14px",
            color: "#000",
            "&:focus": {
              outline: "none",
            },
          },
        }}
      />
      <Box mt={2} display={"flex"} justifyContent={"flex-end"}>
        <Button
          variant="outlined"
          sx={{ mr: 2 }}
          onClick={() => navigate("/email-templates")}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleCreateTemplate}
          sx={{ height: "50px", backgroundColor: "#0473E9", color: "#FFFFFF" }}
        >
          Create Template
        </Button>
      </Box>
    </Box>
  );
};

export default EmailEditor;
