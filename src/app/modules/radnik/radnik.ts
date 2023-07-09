import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface Radnik {
    id?: number,
    name: string,
}

export interface RadnikStatus {
    id: number,
    naziv: string
}

export function newRadnik(): Radnik {
    return {
        // id: '',
        name: '',
    };
}
export function radnikFormGroup(fb: FormBuilder, radnik: Radnik): FormGroup {
    return fb.group({
        name: '',
    })
}
