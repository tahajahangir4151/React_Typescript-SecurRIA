import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  InputLabel,
  StyledCloseButton,
  StyledDialogueAction,
  StyledDialogueButton,
  StyledDialogueTitle,
  StyledSubmitButton,
  StyledTextField,
  Subtitle,
} from "../styles/TargetDialogueStyle";

interface TargetData {
  id: number;
  name: string;
  email: string;
  title: string;
}

interface TargetDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (target: TargetData) => void;
  initialData?: TargetData | null;
}

const TargetDialog: React.FC<TargetDialogProps> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [title, setTitle] = useState(initialData?.title || "");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    title: false,
    emailFormat: false,
  });

  useEffect(() => {
    if (open && initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setTitle(initialData.title);
    } else {
      setName("");
      setEmail("");
      setTitle("");
    }
  }, [open, initialData]);

  const handleSubmit = () => {
    setErrors({ name: false, email: false, title: false, emailFormat: false });

    let hasError = false;
    if (!name) {
      setErrors((prev) => ({ ...prev, name: true }));
      hasError = true;
    }
    if (!email) {
      setErrors((prev) => ({ ...prev, email: true }));
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({ ...prev, emailFormat: true }));
      hasError = true;
    }
    if (!title) {
      setErrors((prev) => ({ ...prev, title: true }));
      hasError = true;
    }

    if (!hasError) {
      const newTarget = {
        id: initialData?.id || 0,
        name,
        email,
        title,
      };
      onSubmit(newTarget);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <StyledDialogueTitle>
        {initialData ? "Update Target" : "Add Target"}
        <StyledCloseButton onClick={onClose}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledDialogueTitle>
      <Subtitle variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Subtitle>
      <DialogContent>
        <InputLabel variant="body1">Name:</InputLabel>
        <StyledTextField
          fullWidth
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          helperText={errors.name && "Name is required"}
        />
        <InputLabel variant="body1">Email:</InputLabel>
        <StyledTextField
          fullWidth
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email || errors.emailFormat}
          helperText={
            errors.email
              ? "Email is required"
              : errors.emailFormat
              ? "Invalid email format"
              : ""
          }
        />
        <InputLabel variant="body1">Title:</InputLabel>
        <StyledTextField
          fullWidth
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
          helperText={errors.title && "Title is required"}
        />
      </DialogContent>
      <StyledDialogueAction>
        <StyledDialogueButton onClick={onClose}>Cancel</StyledDialogueButton>
        <StyledSubmitButton onClick={handleSubmit}>
          {initialData ? "Update" : "Done"}
        </StyledSubmitButton>
      </StyledDialogueAction>
    </Dialog>
  );
};

export default TargetDialog;
