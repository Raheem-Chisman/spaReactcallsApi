import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropDown from "react-bootstrap/Dropdown";

/**
 * Renders a drop down button with child buttons for loging in with a propup or redirect
 * Note the [useMsal] package
 */


export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch((e) => {
                console.log(e);
            });
        }
    };
    return (
        <DropdownButton
            variant="secondary"
            className="ml-auto"
            drop="start"
            title="Sign In"
        >
            <DropDown.Item as="button" onClick={() => handleLogin("popup")}>
                Sign in using Popup
            </DropDown.Item>
            <DropDown.Item as="button" onClick={() => handleLogin("redirect")}>
                Sign in using Redirect
            </DropDown.Item>
        </DropdownButton>
    );
};