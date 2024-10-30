import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Email } from "../data/emailTemplateData";

const EmailEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const addTemplate = location.state?.addTemplate;

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    setText(
      convertToRaw(state.getCurrentContent())
        .blocks.map((block) => block.text)
        .join("\n")
    );
  };

  const handleCreateTemplate = () => {
    const newTemplate: Email = {
      from: "Your Company <no-reply@yourcompany.com>",
      to: "Recipient <recipient@example.com>",
      date: new Date().toLocaleString(),
      subject,
      message: text,
      eventOccured: "Sample event data",
      authenticationMessage: "Sample authentication message",
      Regards: "Best regards, Your Company",
      logoUrl: "path-to-logo.png",
    };

    if (addTemplate) {
      addTemplate(newTemplate);
    }
    navigate("/email-templates");
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ color: "#0473E9", fontWeight: "bold" }}>
        New Email Template
      </Typography>
      <TextField
        label="Subject"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleEditorChange}
      />
      <Box mt={2}>
        <Button
          variant="outlined"
          sx={{ mr: 2 }}
          onClick={() => navigate("/email-templates")}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateTemplate}
        >
          Create Template
        </Button>
      </Box>
    </Box>
  );
};

export default EmailEditor;
