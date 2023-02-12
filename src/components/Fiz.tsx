import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiText,
  EuiSplitPanel,
} from "@elastic/eui";

const Fiz = () => {
  return (
    <div>
      <EuiFlexGroup
        style={{ marginTop: "60px", marginBottom: "60px", color: "#36A2EF" }}
      >
        <EuiFlexItem>
          <EuiFormRow label="Фамилия" style={{ fontSize: "20px" }}>
            <EuiFieldText style={{height: '30px'}}/>
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Имя" style={{ fontSize: "20px" }}>
            <EuiFieldText style={{height: '30px'}}/>
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Отчество" style={{ fontSize: "20px" }}>
            <EuiFieldText style={{height: '30px'}}/>
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Дата рождения" style={{ fontSize: "20px" }}>
            <EuiFieldText style={{height: '30px'}}/>
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiButton fill style={{ fontSize: "20px" }}>
            Запросить данные
          </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSplitPanel.Outer>
            <EuiSplitPanel.Inner style={{ color: "#36A2EF" }}>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiText>Результат запроса</EuiText>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButton iconType="copyClipboard" iconSide="left">
                    Скопировать
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiSplitPanel.Inner>
            <EuiSplitPanel.Inner color="subdued">
              <EuiText>
                <p className="ResultFiz"></p>
              </EuiText>
            </EuiSplitPanel.Inner>
          </EuiSplitPanel.Outer>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default Fiz;
