import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type SampleComponentProps = {
  fields: {
    heading: Field<string>,
    body: Field<string>  
  };
}

const SampleComponent = (props: SampleComponentProps): JSX.Element => (
  <div>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.body} />
  </div>
);

export default SampleComponent;