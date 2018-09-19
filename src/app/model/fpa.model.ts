export class Fpa {
  public id: number;
  public module: string;
  public description: string;
  public ilf_ret: number;
  public ilf_det: number;
  public ilf_technology: string;
  public eif_ret: number;
  public eif_det: number;
  public eif_technology: string;
  public ei_ftr: number;
  public ei_det: number;
  public ei_technology: string;
  public eo_ftr: number;
  public eo_det: number;
  public eo_technology: string;
  public eq_ftr: number;
  public eq_det: number;
  public eq_technology: string;
  public reusePercentage: number;


  constructor(id: number, module: string, description: string, ilf_ret: number, ilf_det: number, ilf_technology: string
              , eif_ret: number, eif_det: number, eif_technology: string, ei_ftr: number, ei_det: number
              , ei_technology: string, eo_ftr: number, eo_det: number, eo_technology: string, eq_ftr: number
              , eq_det: number, eq_technology: string, reusePercentage: number) {

    this.id = id;
    this.module = module;
    this.description = description;
    this.ilf_ret = ilf_ret;
    this.ilf_det = ilf_det;
    this.ilf_technology = ilf_technology;
    this.eif_ret = eif_ret;
    this.eif_det = eif_det;
    this.eif_technology = eif_technology;
    this.ei_ftr = ei_ftr;
    this.ei_det = ei_det;
    this.ei_technology = ei_technology;
    this.eo_ftr = eo_ftr;
    this.eo_det = eo_det;
    this.eo_technology = eo_technology;
    this.eq_ftr = eq_ftr;
    this.eq_det = eq_det;
    this.eq_technology = eq_technology;
    this.reusePercentage = reusePercentage;
  }



}
