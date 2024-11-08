import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Email } from "../data/emailTemplateData";
import logoUrl from "../images/png-clipart-paypal-logo-paypal-blue-text-removebg-preview.png";
import {
  DescriptionTypography,
  TitleTypography,
} from "../styles/PageHeadingStyle";
import { StyledLabel, StyledTextField } from "../styles/NewEmailCompaignStyle";
import { styled } from "@mui/material/styles";

const StyledEditorContainer = styled("div")({
  "& .rdw-editor-main": {
    border: "1px solid #C1C1C1",
    padding: "16px",
    borderRadius: "8px",
    minHeight: "350px",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    overflowWrap: "break-word",
    overflowX: "hidden",
    maxWidth: "100%",
  },
});

const StyledCreateBtn = styled(Button)(({ theme }) => ({
  height: "50px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));
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
    <Box sx={{ padding: 0 }}>
      <TitleTypography variant="h4">New Email Template</TitleTypography>
      <DescriptionTypography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </DescriptionTypography>
      <Box sx={{ marginTop: "30px" }}>
        <StyledLabel variant="body1">Subject:</StyledLabel>
        <StyledTextField
          fullWidth
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          placeholder="Enter Subject"
          name="subject"
          sx={{ mb: "15px" }}
        />
      </Box>
      <StyledEditorContainer>
        {" "}
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
      </StyledEditorContainer>
      <Box mt={2} display={"flex"} justifyContent={"flex-end"}>
        <Button
          variant="outlined"
          sx={{ mr: 2 }}
          onClick={() => navigate("/email-templates")}
        >
          Cancel
        </Button>
        <StyledCreateBtn variant="contained" onClick={handleCreateTemplate}>
          Create Template
        </StyledCreateBtn>
      </Box>
    </Box>
  );
};

export default EmailEditor;
