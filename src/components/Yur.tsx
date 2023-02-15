import {
  EuiFormRow,
  EuiFieldText,
  EuiFlexGroup,
  EuiButton,
  EuiFlexItem,
  EuiSplitPanel,
  EuiText,
  EuiPanel,
} from "@elastic/eui";

const Yur = () => {
  return (
    <div>
      <EuiPanel hasBorder={true}  style={{marginTop: '30px'}}>
  
      <EuiFlexGroup
        style={{ marginTop: "25px", marginBottom: "40px", color: "#36A2EF" }}
      >
        <EuiFormRow
          label="Наименование организации"
          style={{ fontSize: "20px"}}
        >
          <EuiFieldText name="company-name" style={{height: '30px', marginTop: '20px' }}/>
        </EuiFormRow>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiButton fill style={{ fontSize: "20px" }}>
            Запросить данные
          </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSplitPanel.Outer color="primary" style={{marginBottom: '25px'}}>
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
            </EuiSplitPanel.Inner >
            <EuiSplitPanel.Inner color="subdued" >
              <EuiText>
                <p className="ResultYur"></p>
              </EuiText>
            </EuiSplitPanel.Inner>
          </EuiSplitPanel.Outer>
        </EuiFlexItem>
      </EuiFlexGroup>
</EuiPanel>
    </div>
  );
};

export default Yur;
