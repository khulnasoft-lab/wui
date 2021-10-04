import lightColors from '!!sass-vars-to-js-loader!../../../../src/global_styling/variables/_colors.scss';
import darkColors from '!!sass-vars-to-js-loader!../../../../src/themes/eui/eui_colors_dark.scss';
import lightWazuhColors from '!!sass-vars-to-js-loader!../../../../src/themes/eui-wazuh/eui_wazuh_colors_light.scss';
import darkWazuhColors from '!!sass-vars-to-js-loader!../../../../src/themes/eui-wazuh/eui_wazuh_colors_dark.scss';

export const getSassVars = theme => {
  let palette;
  switch (theme) {
    case 'wazuh-dark':
      palette = { ...darkColors, ...darkWazuhColors };
      break;
    case 'wazuh-light':
      palette = { ...lightColors, ...lightWazuhColors };
      break;
    case 'dark':
      palette = darkColors;
      break;
    default:
      palette = lightColors;
      break;
  }

  return palette;
};
