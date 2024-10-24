export class ServiceObject {
    constructor(public entity?: string, public data?: any, public attributes?: any){
        this.entity = entity;
        this.data = data;
        this.attributes = attributes;
    }
    status: number | undefined;
    message: string | undefined;
}