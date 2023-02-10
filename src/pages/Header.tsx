import React from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
  EuiPageHeader,
} from "@elastic/eui";

const Header = () => {
  return (
    <EuiFlexGroup className="header-section" style={{marginTop: '100px', marginBottom: '100px'}}>
      <EuiFlexItem grow={false}>
        <EuiLink href="index.html">
          <EuiIcon type="logoSecurity" size="xxl" href="#" />
        </EuiLink>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiPageHeader
          pageTitle="База данных Росфинмониторинга"
          description="Проверьте информацию о контрагенте по Переченю организаций и физических лиц, в отношении которых имеются сведения об их причастности к экстремистской деятельности или терроризму"
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiLink
          href="https://www.fedsfm.ru/documents/federal-lawss"
          target="_blank"
          color="ghost"
        >
          Ссылка на законодательство
        </EuiLink>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Header;
