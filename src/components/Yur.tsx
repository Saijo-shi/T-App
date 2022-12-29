import {
  EuiFormRow,
  EuiFieldText,
  EuiFlexGroup,
  EuiTextArea,
} from "@elastic/eui";
import { euiFlexGroupStyles } from "@elastic/eui/src/components/flex/flex_group.styles";

const Yur = () => {
  return (
    <EuiFlexGroup direction="column">
      <EuiFormRow label="Наименование организации">
        <EuiFieldText name="company-name" />
      </EuiFormRow>
      <EuiFormRow label="Результат запроса">
        <EuiTextArea />
      </EuiFormRow>
    </EuiFlexGroup>
  );
};

export default Yur;
