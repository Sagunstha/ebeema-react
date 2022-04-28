import React, { useState } from "react";
import "./Login.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Visibility } from "@material-ui/icons";

const usePasswordToggle = () => {
  const [visible, setvisibility] = useState(false);

  const Icon = (
    <FontAwesomeIcon
      icon={visible ? "eye-slash" : "eye"}
      onClick={() => setvisibility((Visibility) => !Visibility)}
    />
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToggle;

// impliment error in login.js