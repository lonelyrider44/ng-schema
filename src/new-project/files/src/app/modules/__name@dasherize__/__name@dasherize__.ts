import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export interface <%= classify(name) %> {
    id?: number,
    name: string,
}

export interface <%= classify(name) %>Status {
    id: number,
    naziv: string
}

export function new<%= classify(name) %>(): <%= classify(name) %> {
    return {
        // id: '',
        name: '',
    };
}
export function <%= camelize(name) %>FormGroup(fb: FormBuilder, <%= underscore(name) %>: <%= classify(name) %>): FormGroup {
    return fb.group({
        name: '',
    })
}
