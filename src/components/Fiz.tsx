import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiTextArea,
} from "@elastic/eui";

const Fiz = () => {
  return (
    <div>
      <EuiFlexGroup style={{ marginTop: '60px', marginBottom: '60px' }}>
        <EuiFlexItem>
          <EuiFormRow label="Фамилия" style={{fontSize:'20px'}}>
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Имя" style={{fontSize:'20px'}}>
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Отчество" style={{fontSize:'20px'}}>
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Дата рождения" style={{fontSize:'20px'}}>
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
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

export default Fiz;
