import React from "react";
import { useNode } from "@craftjs/core";
import { Button, Typography, Card, Form, Input, Select } from "antd";

export const DragContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => ref && connect(drag(ref))}>{children}</div>
  );
};
DragContainer.craft = { displayName: "Container" };

export const DragCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Card ref={(ref) => ref && connect(drag(ref))}>{children}</Card>
  );
};
DragCard.craft = { displayName: "Card" };

export const DragButton: React.FC<{ text?: string }> = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Button ref={(ref) => ref && connect(drag(ref))}>{text || "Button"}</Button>
  );
};
DragButton.craft = { displayName: "Button" };

export const DragText: React.FC<{ text?: string }> = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Typography.Text ref={(ref) => ref && connect(drag(ref))}>
      {text || "Text"}
    </Typography.Text>
  );
};
DragText.craft = { displayName: "Text" };

export const DragInputField: React.FC<{ label: string; name: any }> = ({ label, name }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <Form.Item label={label} name={name}>
        <Input />
      </Form.Item>
    </div>
  );
};
DragInputField.craft = { displayName: "InputField" };

export const DragSelectField: React.FC<{ label: string; name: any; options: { label: string; value: any }[] }> = ({ label, name, options }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <Form.Item label={label} name={name}>
        <Select options={options} />
      </Form.Item>
    </div>
  );
};
DragSelectField.craft = { displayName: "SelectField" };

