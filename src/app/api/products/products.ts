import pulsoPlus from "@/config/products/pulso-plus";
import gesrest from "@/config/products/gesrest";
import hotelHub from "@/config/products/hotelhub";
import sys360 from "@/config/products/360sys";
import comprobante from "@/config/products/comprobante-e";

export const PRODUCTS: Record<string, unknown> = {
  "pulso-plus": pulsoPlus,
  "gesrest": gesrest,
  "hotelhub": hotelHub,
  "360sys": sys360,
  "comprobante-e": comprobante,
};
