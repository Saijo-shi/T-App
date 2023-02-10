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
      <EuiFlexGroup style={{ marginTop: "60px", marginBottom: "60px"}}>
        <EuiFormRow label="Наименование организации" style={{fontSize:'20px'}}>
          <EuiFieldText name="company-name" />
        </EuiFormRow>
        <EuiFlexItem>
          <EuiFormRow hasEmptyLabelSpace>
            <EuiButton style={{fontSize:'20px'}}>Запросить данные</EuiButton>
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFormRow label="Результат" style={{fontSize:'20px'}}>
          <EuiTextArea />
        </EuiFormRow>
      </EuiFlexGroup>
    </div>
  );
};

export default Yur;
