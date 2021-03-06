export class TenantUserAppAlerts{
    Id:number
  alert_type: string;
  
  alert_name : string;
  
  alert_desc: string;
  
  from_date_time: Date;
  
  alert_duration_type: string;
  
  subscription_date: Date;
  
  has_unsubscribed: boolean;
  
  tenant_user_app_id: number;
  
  tenant_user_id: number;
  
  user_id: number;
}