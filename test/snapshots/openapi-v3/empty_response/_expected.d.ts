declare namespace Components {
    namespace Responses {
        export type Created = any;
    }
    namespace Schemas {
        export interface Object {
            id?: string;
        }
    }
}
declare namespace Paths {
    namespace Create {
        namespace Post {
            export type RequestBody = Components.Schemas.Object;
            namespace Responses {
                export type $204 = Components.Responses.Created;
            }
        }
    }
}
