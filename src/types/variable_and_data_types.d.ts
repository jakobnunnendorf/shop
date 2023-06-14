enum enum_Storage_bucket {
    ProductImageBucket = "productImageBucket",
    UserAvatarBucket = "userAvatarBucket",
    DocumentBucket = "documentBucket",
}

type t_UUIDv4 = `${string}-${string}-${string}-${string}-${string}`


enum enum_File_type {
    "application/json" = "application/json",
    "application/pdf" = "application/pdf",
    "application/vnd.ms-excel" = "application/vnd.ms-excel",
    "application/vnd.ms-powerpoint" = "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation" = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/x-zip-compressed" = "application/x-zip-compressed",
    "audio/mpeg" = "audio/mpeg",
    "audio/ogg" = "audio/ogg",
    "image/bmp" = "image/bmp",
    "image/gif" = "image/gif",
    "image/jpeg" = "image/jpeg",
    "image/png" = "image/png",
    "image/svg+xml" = "image/svg+xml",
    "text/csv" = "text/csv",
    "text/html" = "text/html",
    "text/plain" = "text/plain",
    "video/mp4" = "video/mp4",
    "video/ogg" = "video/ogg",
    "video/webm" = "video/webm",
}