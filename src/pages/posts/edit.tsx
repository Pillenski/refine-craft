import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form } from "antd";
import { Editor, Frame, Element } from "@craftjs/core";
import { Toolbox } from "../../components/crafttoolbox";
import {
  DragContainer,
  DragInputField,
  DragSelectField,
} from "../../components/craftnodes";
import type { IPost, ICategory } from "../../interfaces";

export const PostEdit = () => {
  const { formProps, saveButtonProps, query: queryResult } = useForm<IPost>();

  const postData = queryResult?.data?.data;
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
    defaultValue: postData?.category.id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Toolbox />
      <Editor resolver={{ DragContainer, DragInputField, DragSelectField }}>
        <Frame>
          <Element is={DragContainer} canvas>
            <Form {...formProps} layout="vertical">
              <DragInputField label="Title" name="title" />
              <DragSelectField
                label="Category"
                name={["category", "id"]}
                options={categorySelectProps.options || []}
              />
              <DragSelectField
                label="Status"
                name="status"
                options={[
                  { label: "Published", value: "published" },
                  { label: "Draft", value: "draft" },
                  { label: "Rejected", value: "rejected" },
                ]}
              />
              <DragInputField label="Content" name="content" />
            </Form>
          </Element>
        </Frame>
      </Editor>
    </Edit>
  );
};
