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
      <EuiFlexGroup style={{ maxWidth: 600 }}>
        <EuiFlexItem>
          <EuiFormRow label="Фамилия">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Имя">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Отчество">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Дата рождения">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
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

export default Fiz;
