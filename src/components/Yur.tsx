import {
  EuiFormRow,
  EuiFieldText,
  EuiFlexGroup,
  EuiTextArea,
} from "@elastic/eui";


const Yur = () => {
  return (
    <EuiFlexGroup direction="column">
      <EuiFormRow label="Наименование организации">
        <EuiFieldText name="company-name" />
      </EuiFormRow>
      <EuiFormRow label="Результат">
        <EuiTextArea />
      </EuiFormRow>
    </EuiFlexGroup>
  );
};

export default Yur;
