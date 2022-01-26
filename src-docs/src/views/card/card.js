import React from 'react';

import {
  WuiCard,
  WuiIcon,
  WuiFlexGroup,
  WuiFlexItem,
} from '../../../../src/components';

const icons = ['Beats', 'Cloud', 'Logging', 'Kibana'];

const cardNodes = icons.map(function(item, index) {
  return (
    <WuiFlexItem key={index}>
      <WuiCard
        icon={<WuiIcon size="xxl" type={`logo${item}`} />}
        title={`Wazuh ${item}`}
        isDisabled={item === 'Kibana' ? true : false}
        description="Example of a card's description. Stick to one or two sentences."
        onClick={() => window.alert('Card clicked')}
      />
    </WuiFlexItem>
  );
});

export default () => <WuiFlexGroup gutterSize="l">{cardNodes}</WuiFlexGroup>;
