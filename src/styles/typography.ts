type FONT_WEIGHT = "400" | "500" | "600";
type FONT_STYLE =
  | "title"
  | "title_medium"
  | "title_bold"
  | "sub_title"
  | "sub_title_medium"
  | "sub_title_bold"
  | "body_xxl"
  | "body_xxl_medium"
  | "body_xxl_bold"
  | "body_xl"
  | "body_xl_medium"
  | "body_xl_bold"
  | "body_l"
  | "body_l_medium"
  | "body_l_bold"
  | "body_m"
  | "body_m_medium"
  | "body_m_bold";

interface ITypography {
  fontSize: number;
  fontWeight: FONT_WEIGHT;
}

const Typography: Record<FONT_STYLE, ITypography> = {
  title: {
    fontSize: 64,
    fontWeight: "400",
  },
  title_medium: {
    fontSize: 64,
    fontWeight: "500",
  },
  title_bold: {
    fontSize: 64,
    fontWeight: "600",
  },
  sub_title: {
    fontSize: 48,
    fontWeight: "400",
  },
  sub_title_medium: {
    fontSize: 48,
    fontWeight: "500",
  },
  sub_title_bold: {
    fontSize: 48,
    fontWeight: "600",
  },
  body_xxl: {
    fontSize: 24,
    fontWeight: "400",
  },
  body_xxl_medium: {
    fontSize: 24,
    fontWeight: "500",
  },
  body_xxl_bold: {
    fontSize: 24,
    fontWeight: "600",
  },
  body_xl: {
    fontSize: 20,
    fontWeight: "400",
  },
  body_xl_medium: {
    fontSize: 20,
    fontWeight: "500",
  },
  body_xl_bold: {
    fontSize: 20,
    fontWeight: "600",
  },
  body_l: {
    fontSize: 16,
    fontWeight: "400",
  },
  body_l_medium: {
    fontSize: 16,
    fontWeight: "500",
  },
  body_l_bold: {
    fontSize: 16,
    fontWeight: "600",
  },
  body_m: {
    fontSize: 12,
    fontWeight: "400",
  },
  body_m_medium: {
    fontSize: 12,
    fontWeight: "500",
  },
  body_m_bold: {
    fontSize: 12,
    fontWeight: "600",
  },
};

export default Typography;
