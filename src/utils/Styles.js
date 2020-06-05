import {Platform, Dimensions} from 'react-native';
import COLOR from './Colors';
import {scaleModerate, scaleVertical, scale} from './Scale';
import {StyleSheet} from 'react-native';

export const container = {flex: 1, backgroundColor: COLOR.BG};

export const border = {
  l_top_rounded: {
    borderTopStartRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopEndRadius: 12,
  },
  l_bottom_round: {
    borderBottomStartRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomEndRadius: 12,
  },
  circle: {
    borderRadius: 1000,
  },

  white_circle: {
    borderRadius: 1000,
    backgroundColor: 'white',
  },
  white_rounded: {
    borderRadius: scaleModerate(4),
    backgroundColor: 'white',
  },

  white_m_rounded: {
    borderRadius: scaleModerate(8),
    backgroundColor: 'white',
  },

  rounded: {
    borderRadius: scaleModerate(7),
  },

  top_rounded: {
    borderTopStartRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopEndRadius: 12,
  },

  bottom_rounded: {
    borderBottomStartRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomEndRadius: 12,
  },

  b_gray: {
    borderBottomWidth: scaleModerate(0.8),
    borderColor: '#ddd',
  },

  red: {
    borderWidth: 1,
    borderColor: COLOR.ERROR,
  },
};

export const size = {
  stiny: {
    width: scaleModerate(8),
    height: scaleModerate(8),
  },
  tiny: {
    width: scaleModerate(10),
    height: scaleModerate(10),
  },
  ssm: {
    width: scaleModerate(12),
    height: scaleModerate(12),
  },
  ssml: {
    width: scaleModerate(14),
    height: scaleModerate(14),
  },
  sml: {
    width: scaleModerate(18),
    height: scaleModerate(18),
  },
  smll: {
    width: scaleModerate(22),
    height: scaleModerate(22),
  },
  sm: {
    width: scaleModerate(24),
    height: scaleModerate(24),
  },
  xsm: {
    width: scaleModerate(28),
    height: scaleModerate(28),
  },
  smd: {
    width: scaleModerate(36),
    height: scaleModerate(36),
  },
  md: {
    width: scaleModerate(48),
    height: scaleModerate(48),
  },
  xmd: {
    width: scaleModerate(55),
    height: scaleModerate(55),
  },
  slg: {
    width: scaleModerate(60),
    height: scaleModerate(60),
  },
  slgVertical: {
    width: scaleVertical(62),
    height: scaleVertical(62),
  },
  lg: {
    width: scaleModerate(64),
    height: scaleModerate(64),
  },
  xlg: {
    width: scaleModerate(72),
    height: scaleModerate(72),
  },
  xxlg: {
    width: scaleModerate(100),
    height: scaleModerate(100),
  },
  xxxlg: {
    width: scaleModerate(150),
    height: scaleModerate(150),
  },
  rectangle_lg: {
    width: scaleModerate(90),
    height: scaleModerate(60),
  },
  rectangle_xmd: {
    width: scaleModerate(75),
    height: scaleModerate(50),
  },
  rectangle_smd: {
    width: scaleModerate(54),
    height: scaleModerate(36),
  },
  rectangle_md: {
    width: scaleModerate(63),
    height: scaleModerate(42),
  },
};

export const shadow = {
  lg: {
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  md: {
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  sm: {
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  smd: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 1.5,
  },

  ssm: {
    elevation: 1.5,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  sssm: {
    elevation: 1.5,
    shadowColor: '#333333',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  xlg: {
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
};

export const buttons = StyleSheet.create({
  rounded: {
    borderRadius: 6,
    paddingVertical: scaleModerate(12),
    marginVertical: scaleModerate(8),
  },

  orange_rounded: {
    backgroundColor: COLOR.NL_ORANGE,
    borderRadius: 6,
    height: scaleModerate(48),
    justifyContent: 'center',
    ...shadow.sm,
  },
  orange_rounded_sm: {
    backgroundColor: COLOR.NL_ORANGE,
    borderRadius: 6,
    height: scaleModerate(38),
    justifyContent: 'center',
    ...shadow.sm,
  },

  gray_rounded: {
    backgroundColor: 'gray',
    borderRadius: 6,
    height: scaleVertical(48),
    justifyContent: 'center',
  },

  light_gray_rounded: {
    backgroundColor: '#f9f8f7',
    borderRadius: 6,
    height: scaleVertical(48),
    justifyContent: 'center',
  },

  white_rounded: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: scaleVertical(48),
    justifyContent: 'center',
    ...shadow.sm,
  },

  white_rounded_row_w100: {
    backgroundColor: 'white',
    borderRadius: 6,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  black_text: {
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontSize: scaleModerate(16),
    textTransform: 'uppercase',
    fontFamily: 'NunitoSans-SemiBold',
  },

  white_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: scaleModerate(16),
    textTransform: 'uppercase',
    fontFamily: 'NunitoSans-SemiBold',
  },

  white_small_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: scaleModerate(13),
    textTransform: 'uppercase',
    fontFamily: 'NunitoSans-SemiBold',
  },
});

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
};

export const inputs = {
  //wrapper
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginVertical: 4,
    backgroundColor: 'white',
  },
  white_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  //text
  right_f1_text: {
    height: scaleModerate(48),
    flex: 1,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
    fontSize: scaleModerate(14),
  },
  r_f1_big_orange_text: {
    height: scaleModerate(48),
    flex: 1,
    textAlign: 'right',
    color: COLOR.NL_ORANGE,
    fontSize: scaleModerate(14),
  },
  left_f1_text: {
    paddingTop: scaleModerate(14),
    paddingBottom: scaleModerate(4),
    padding: 0,
    flex: 1,
    fontFamily: 'NunitoSans-Regular',
    fontSize: scaleModerate(14),
  },

  center_round_white: {
    backgroundColor: 'white',
    height: scaleModerate(48),
    borderRadius: 6,
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontSize: scaleModerate(14),
  },

  left_round_white: {
    backgroundColor: 'white',
    height: scaleModerate(48),
    borderRadius: 6,
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
    fontSize: scaleModerate(14),
  },
};

export const padding = {
  v_sm: {
    paddingVertical: scaleModerate(4),
  },
  v_ssm: {
    paddingVertical: scaleModerate(2),
  },
  v_smd: {
    paddingVertical: scaleModerate(8),
  },
  v_xmd: {
    paddingVertical: scaleModerate(10),
  },
  v_md: {
    paddingVertical: scaleModerate(16),
  },
  v_lg: {
    paddingVertical: scaleModerate(20),
  },
  v_xlg: {
    paddingVertical: scaleModerate(32),
  },

  h_sm: {
    paddingHorizontal: scaleModerate(4),
  },
  h_ssm: {
    paddingHorizontal: scaleModerate(2),
  },
  h_xsm: {
    paddingHorizontal: scaleModerate(6),
  },
  h_smd: {
    paddingHorizontal: scaleModerate(8),
  },
  h_md: {
    paddingHorizontal: scaleModerate(16),
  },
  h_lg: {
    paddingHorizontal: scaleModerate(20),
  },
  h_mlg: {
    paddingHorizontal: scaleModerate(26),
  },
  h_xlg: {
    paddingHorizontal: scaleModerate(32),
  },
  t_ssm: {
    paddingTop: scaleModerate(2),
  },
  t_sm: {
    paddingTop: scaleModerate(4),
  },
  t_smd: {
    paddingTop: scaleModerate(8),
  },
  t_md: {
    paddingTop: scaleModerate(16),
  },
  t_lg: {
    paddingTop: scaleModerate(20),
  },
  t_xlg: {
    paddingTop: scaleModerate(32),
  },
  sm: {
    padding: scaleModerate(4),
  },

  smd: {
    padding: scaleModerate(8),
  },
  mmd: {
    padding: scaleModerate(12),
  },
  md: {
    padding: scaleModerate(16),
  },
  lg: {
    padding: scaleModerate(20),
  },
  l_sm: {
    paddingLeft: scaleModerate(8),
  },

  l_md: {
    paddingLeft: scaleModerate(12),
  },

  r_sm: {
    paddingRight: scaleModerate(8),
  },

  r_md: {
    paddingRight: scaleModerate(12),
  },

  l_lg: {
    paddingLeft: scaleModerate(18),
  },
  b_lg: {
    paddingBottom: scaleModerate(18),
  },
  b_slg: {
    paddingBottom: scaleModerate(20),
  },
  b_xlg: {
    paddingBottom: scaleModerate(30),
  },
  b_md: {
    paddingBottom: scaleModerate(14),
  },
  b_sm: {
    paddingBottom: scaleModerate(10),
  },
};

export const margin = {
  v_sm: {
    marginVertical: scaleModerate(4),
  },
  v_smd: {
    marginVertical: scaleModerate(8),
  },
  v_mmd: {
    marginVertical: scaleModerate(12),
  },
  v_md: {
    marginVertical: scaleModerate(16),
  },
  v_lg: {
    marginVertical: scaleModerate(20),
  },
  v_xlg: {
    marginVertical: scaleModerate(32),
  },

  sm: {
    margin: scaleModerate(4),
  },

  md: {
    margin: scaleModerate(16),
  },

  h_sm: {
    marginHorizontal: scaleModerate(4),
  },
  h_md: {
    marginHorizontal: scaleModerate(16),
  },
  h_lg: {
    marginHorizontal: scaleModerate(20),
  },
  h_xlg: {
    marginHorizontal: scaleModerate(32),
  },

  b_lg: {
    marginBottom: scaleModerate(20),
  },

  b_sm: {
    marginBottom: scaleModerate(10),
  },

  b_xlg: {
    marginBottom: scaleModerate(32),
  },

  t_xxlg: {
    marginTop: scaleVertical(64),
  },
  t_xlg: {
    marginTop: scaleVertical(32),
  },
  t_lg: {
    marginTop: scaleVertical(20),
  },
  t_sm: {
    marginTop: scaleVertical(8),
  },
  t_ssm: {
    marginTop: scaleVertical(4),
  },
  t_md: {
    marginTop: scaleVertical(12),
  },
  r_normal: {
    marginRight: scaleModerate(20),
  },
  r_sm: {
    marginRight: scaleModerate(4),
  },

  l_sm: {
    marginLeft: scaleModerate(4),
  },
  l_smd: {
    marginLeft: scaleModerate(8),
  },
};

export const texts = {
  h0: {
    fontSize: scaleModerate(28),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },
  h1: {
    fontSize: scaleModerate(24),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  l_h1: {
    fontSize: scaleModerate(24),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },

  r_h1: {
    fontSize: scaleModerate(24),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  h2: {
    fontSize: scaleModerate(20),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  l_h2: {
    fontSize: scaleModerate(20),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },
  l_h2_orange: {
    fontSize: scaleModerate(20),
    color: COLOR.NL_ORANGE,
    fontFamily: 'NunitoSans-Regular',
  },

  h2_orange: {
    fontSize: scaleModerate(20),
    color: COLOR.NL_ORANGE,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
  },

  r_h2: {
    fontSize: scaleModerate(20),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  h5: {
    fontSize: scaleModerate(16),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  h3: {
    fontSize: scaleModerate(18),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  h3_orange: {
    fontSize: scaleModerate(18),
    color: COLOR.NL_ORANGE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  l_h3: {
    fontSize: scaleModerate(18),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },

  r_h3: {
    fontSize: scaleModerate(18),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },
  h4: {
    fontSize: scaleModerate(16),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },
  h4_orange: {
    fontSize: scaleModerate(16),
    color: COLOR.NL_ORANGE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  l_h4: {
    fontSize: scaleModerate(16),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },

  r_h4: {
    fontSize: scaleModerate(16),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  r_h5: {
    fontSize: scaleModerate(14),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  l_h5: {
    fontSize: scaleModerate(14),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },

  normal: {
    fontSize: scaleModerate(14),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  l_normal: {
    fontSize: scaleModerate(14),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },
  l_larg: {
    fontSize: scaleModerate(16),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },

  r_normal: {
    fontSize: scaleModerate(14),
    fontWeight: 'normal',
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },
  l_sm: {
    fontSize: scaleModerate(12),
    color: COLOR.TEXT_LABEL,
    textAlign: 'left',
    fontFamily: 'NunitoSans-Regular',
  },

  l_placeholder: {
    fontSize: scaleModerate(14),
    color: COLOR.PLACEHOLDER_TEXT,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'left',
  },

  sm: {
    fontSize: scaleModerate(12),
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontWeight: 'normal',
    fontFamily: 'NunitoSans-Regular',
  },

  sm_l_error: {
    fontSize: scaleModerate(12),
    color: COLOR.ERROR,
    textAlign: 'left',
    fontFamily: 'NunitoSans-Regular',
  },
  sm_error: {
    fontSize: scaleModerate(12),
    color: COLOR.ERROR,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  sm_placeholder: {
    fontSize: scaleModerate(12),
    color: COLOR.PLACEHOLDER_TEXT,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  sm_bold: {
    fontSize: scaleModerate(12),
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 'bold',
  },

  md: {
    fontSize: scaleModerate(14),
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontWeight: 'normal',
    fontFamily: 'NunitoSans-Regular',
  },

  r_sm: {
    fontSize: scaleModerate(12),
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontWeight: 'normal',
    fontFamily: 'NunitoSans-Regular',
  },
  r_ssm: {
    fontSize: scaleModerate(10),
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  ssm: {
    fontSize: scaleModerate(10),
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  r_tiny: {
    fontSize: scaleModerate(8),
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  r_tiny_bold: {
    fontSize: scaleModerate(8),
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 'bold',
  },
  r_sm_bold: {
    fontSize: scaleModerate(9),
    color: COLOR.TEXT_LABEL,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 'bold',
  },

  l_ssm: {
    fontSize: scaleModerate(10),
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
  },
  l_smd: {
    fontSize: scaleModerate(11),
    color: COLOR.TEXT_LABEL,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'left',
  },

  gray_normal: {
    fontSize: scaleModerate(14),
    color: '#666',
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  normal_bold: {
    fontSize: scaleModerate(14),
    color: COLOR.TEXT_LABEL,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 'bold',
  },

  gray_sm: {
    fontSize: scaleModerate(12),
    color: '#666',
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  l_gray_normal: {
    fontSize: scaleModerate(14),
    color: '#666',
    fontFamily: 'NunitoSans-Regular',
  },

  l_sm_orange: {
    fontSize: scaleModerate(12),
    color: COLOR.DARK_ORANGE,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'left',
  },

  orange_normal: {
    fontSize: scaleModerate(14),
    color: COLOR.NL_ORANGE,
    fontFamily: 'NunitoSans-Regular',
  },

  orange_normal_center: {
    fontSize: scaleModerate(14),
    color: COLOR.NL_ORANGE,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
  },

  orange_sm: {
    fontSize: scaleModerate(12),
    color: COLOR.NL_ORANGE,
    fontFamily: 'NunitoSans-Regular',
  },

  orange_ssm: {
    fontSize: scaleModerate(10),
    color: COLOR.NL_ORANGE,
    fontFamily: 'NunitoSans-Regular',
  },

  r_orange_normal: {
    fontSize: scaleModerate(14),
    color: COLOR.NL_ORANGE,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  orange_lg: {
    fontSize: scaleModerate(14),
    color: COLOR.NL_ORANGE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },
  r_orange_lg: {
    fontSize: scaleModerate(14),
    color: COLOR.NL_ORANGE,
    textAlign: 'right',
    fontFamily: 'NunitoSans-Regular',
  },

  white_sm: {
    fontSize: scaleModerate(12),
    color: COLOR.WHITE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  white_normal: {
    fontSize: scaleModerate(14),
    color: COLOR.WHITE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  white_bold: {
    fontSize: scaleModerate(14),
    color: COLOR.WHITE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 'bold',
  },

  white_h3: {
    fontSize: scaleModerate(18),
    color: COLOR.WHITE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  white_ssm: {
    fontSize: scaleModerate(10),
    color: COLOR.WHITE,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
  },

  light: {
    fontWeight: 'normal',
    fontFamily: 'NunitoSans-Light',
  },

  bold: {
    fontWeight: 'normal',
    fontFamily: 'NunitoSans-Bold',
  },
  semi_bold: {
    fontWeight: 'normal',
    fontFamily: 'NunitoSans-SemiBold',
  },
  italic: {
    fontWeight: 'normal',
    fontFamily: 'NunitoSans-SemiBoldItalic',
  },

  warning: {
    fontSize: scaleModerate(14),
    color: COLOR.ERROR,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontStyle: 'italic',
  },
};
