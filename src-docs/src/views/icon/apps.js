// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS

// This example JS is overly complex for simple icon usage
// and is set up this way for ease of use in our docs.
//
// Check the snippet tab for a more common usage.

import React from 'react';

import {
  WuiFlexGrid,
  WuiFlexItem,
  WuiIcon,
  WuiPanel,
  WuiText,
  WuiCopy,
} from '../../../../src/components';

const iconTypes = [
  'addDataApp',
  'advancedSettingsApp',
  'apmApp',
  'appSearchApp',
  'auditbeatApp',
  'canvasApp',
  'codeApp',
  'consoleApp',
  'crossClusterReplicationApp',
  'dashboardApp',
  'devToolsApp',
  'discoverApp',
  'emsApp',
  'filebeatApp',
  'gisApp',
  'graphApp',
  'grokApp',
  'heartbeatApp',
  'indexManagementApp',
  'indexPatternApp',
  'indexRollupApp',
  'metricsApp',
  'lensApp',
  'logsApp',
  'machineLearningApp',
  'managementApp',
  'metricbeatApp',
  'monitoringApp',
  'notebookApp',
  'packetbeatApp',
  'pipelineApp',
  'recentlyViewedApp',
  'reportingApp',
  'savedObjectsApp',
  'searchProfilerApp',
  'securityAnalyticsApp',
  'securityApp',
  'spacesApp',
  'sqlApp',
  'timelionApp',
  'upgradeAssistantApp',
  'uptimeApp',
  'usersRolesApp',
  'visualizeApp',
  'watchesApp',
  'workplaceSearchApp',
];

export default () => (
  <WuiFlexGrid columns={4}>
    {iconTypes.map(iconType => (
      <WuiFlexItem
        className="guideDemo__icon"
        key={iconType}
        style={{ width: '200px' }}>
        <WuiCopy textToCopy={iconType} afterMessage={`${iconType} copied`}>
          {copy => (
            <WuiPanel onClick={copy} className="wui-textCenter">
              <WuiIcon type={iconType} size="xl" />
              <WuiText size="s">
                <p>{iconType}</p>
              </WuiText>
            </WuiPanel>
          )}
        </WuiCopy>
      </WuiFlexItem>
    ))}
  </WuiFlexGrid>
);
