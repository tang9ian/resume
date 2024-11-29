export interface Contact {
    email?: string
    phone?: string
    linkedin?: string
    portfolio?: string
}

export interface Experience {
    position?: string
    company?: string
    years?: string
    description?: string
}

export interface Education {
    degree?: string
    school?: string
    years?: string
}

export interface ResumeData {
    name?: string
    title?: string
    contact?: Contact
    summary?: string
    skills?: string[]
    experience?: Experience[]
    education?: Education[]
}
