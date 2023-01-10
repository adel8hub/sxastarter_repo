import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type FirstCustomComponentProps = {
  fields: {
    heading: Field<string>;
    body: Field<string>;
  };
};

const FirstCustomComponent = (props: FirstCustomComponentProps): JSX.Element => (
  <div>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.body} />
  </div>
);

export default FirstCustomComponent;
