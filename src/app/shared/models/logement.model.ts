export class LogementModel{
  public id!:number
  public name!: string
  public user!:string 
  public address!:string
  public telephone!:string
  public cover!: string
  public image!:string[]
  public nombre_chambre!: number
  public star!: number
  public type_lit!:string[]
  public equipement!:string[]
  public nombre_pices!:number
  public ville!: string
  public isDisponible!: boolean
  public isApartement?: boolean |null
  public isStudio?: boolean | null
  public capacite?: string | null
  public prix!: number
  public creatAt!:string
  public updateAt!:string
}
