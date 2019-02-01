/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: projects
// ====================================================

export interface projects_projects_categories {
  __typename: "Projectcategory";
  category: string;
}

export interface projects_projects {
  __typename: "Project";
  _id: string;
  description: string | null;
  title: string;
  background_color: string | null;
  categories: (projects_projects_categories | null)[] | null;
}

export interface projects {
  projects: (projects_projects | null)[] | null;
}
