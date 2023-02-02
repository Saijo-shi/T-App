import {
  EuiFormRow,
  EuiFieldText,
  EuiFlexGroup,
  EuiTextArea,
  EuiButton,
  EuiFlexItem,
} from "@elastic/eui";

const Yur = () => {
  return (
    <div>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Наименование организации">
            <EuiFieldText name="company-name" />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow hasEmptyLabelSpace>
            <EuiButton>Запросить данные</EuiButton>
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFormRow label="Результат">
          <EuiTextArea />
        </EuiFormRow>
      </EuiFlexGroup>
    </div>
  );
};

export default Yur;
