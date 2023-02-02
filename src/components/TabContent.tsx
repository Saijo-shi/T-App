import React, { Fragment, useState } from "react";
import tabs from "./Tabs";
import { EuiTabbedContent, EuiTabbedContentTab } from "@elastic/eui";

const TabContent = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabClick = (selectedTab: EuiTabbedContentTab) => {
    setSelectedTab(selectedTab);
  };

  return (
    <Fragment>
      <EuiTabbedContent
        size="xl"
        tabs={tabs}
        selectedTab={selectedTab}
        onTabClick={onTabClick}
      />
    </Fragment>
  );
};
export default TabContent;
