/**
 * Created by michaeli on 28/04/2017.
 */

var steps = {
    "namespace": "wp/v2",
    "methods": [
        "GET",
        "POST"
    ],
    "endpoints": [
        {
            "methods": [
                "GET"
            ],
            "args": {
                "context": {
                    "required": false,
                    "default": "view",
                    "enum": [
                        "view",
                        "embed",
                        "edit"
                    ],
                    "description": "Scope under which the request is made; determines fields present in response.",
                    "type": "string"
                },
                "page": {
                    "required": false,
                    "default": 1,
                    "description": "Current page of the collection.",
                    "type": "integer"
                },
                "per_page": {
                    "required": false,
                    "default": 10,
                    "description": "Maximum number of items to be returned in result set.",
                    "type": "integer"
                },
                "search": {
                    "required": false,
                    "description": "Limit results to those matching a string.",
                    "type": "string"
                },
                "after": {
                    "required": false,
                    "description": "Limit response to posts published after a given ISO8601 compliant date.",
                    "type": "string"
                },
                "author": {
                    "required": false,
                    "default": [],
                    "description": "Limit result set to posts assigned to specific authors.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "author_exclude": {
                    "required": false,
                    "default": [],
                    "description": "Ensure result set excludes posts assigned to specific authors.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "before": {
                    "required": false,
                    "description": "Limit response to posts published before a given ISO8601 compliant date.",
                    "type": "string"
                },
                "exclude": {
                    "required": false,
                    "default": [],
                    "description": "Ensure result set excludes specific IDs.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "include": {
                    "required": false,
                    "default": [],
                    "description": "Limit result set to specific IDs.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "offset": {
                    "required": false,
                    "description": "Offset the result set by a specific number of items.",
                    "type": "integer"
                },
                "order": {
                    "required": false,
                    "default": "desc",
                    "enum": [
                        "asc",
                        "desc"
                    ],
                    "description": "Order sort attribute ascending or descending.",
                    "type": "string"
                },
                "orderby": {
                    "required": false,
                    "default": "date",
                    "enum": [
                        "date",
                        "relevance",
                        "id",
                        "include",
                        "title",
                        "slug"
                    ],
                    "description": "Sort collection by object attribute.",
                    "type": "string"
                },
                "slug": {
                    "required": false,
                    "description": "Limit result set to posts with one or more specific slugs.",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "status": {
                    "required": false,
                    "default": "publish",
                    "description": "Limit result set to posts assigned one or more statuses.",
                    "type": "array",
                    "items": {
                        "enum": [
                            "publish",
                            "future",
                            "draft",
                            "pending",
                            "private",
                            "trash",
                            "auto-draft",
                            "inherit",
                            "any"
                        ],
                        "type": "string"
                    }
                },
                "categories": {
                    "required": false,
                    "default": [],
                    "description": "Limit result set to all items that have the specified term assigned in the categories taxonomy.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "categories_exclude": {
                    "required": false,
                    "default": [],
                    "description": "Limit result set to all items except those that have the specified term assigned in the categories taxonomy.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "tags": {
                    "required": false,
                    "default": [],
                    "description": "Limit result set to all items that have the specified term assigned in the tags taxonomy.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "tags_exclude": {
                    "required": false,
                    "default": [],
                    "description": "Limit result set to all items except those that have the specified term assigned in the tags taxonomy.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "sticky": {
                    "required": false,
                    "description": "Limit result set to items that are sticky.",
                    "type": "boolean"
                }
            }
        },
        {
            "methods": [
                "POST"
            ],
            "args": {
                "date": {
                    "required": false,
                    "description": "The date the object was published, in the site's timezone.",
                    "type": "string"
                },
                "date_gmt": {
                    "required": false,
                    "description": "The date the object was published, as GMT.",
                    "type": "string"
                },
                "slug": {
                    "required": false,
                    "description": "An alphanumeric identifier for the object unique to its type.",
                    "type": "string"
                },
                "status": {
                    "required": false,
                    "enum": [
                        "publish",
                        "future",
                        "draft",
                        "pending",
                        "private"
                    ],
                    "description": "A named status for the object.",
                    "type": "string"
                },
                "password": {
                    "required": false,
                    "description": "A password to protect access to the content and excerpt.",
                    "type": "string"
                },
                "title": {
                    "required": false,
                    "description": "The title for the object.",
                    "type": "object"
                },
                "content": {
                    "required": false,
                    "description": "The content for the object.",
                    "type": "object"
                },
                "author": {
                    "required": false,
                    "description": "The ID for the author of the object.",
                    "type": "integer"
                },
                "excerpt": {
                    "required": false,
                    "description": "The excerpt for the object.",
                    "type": "object"
                },
                "featured_media": {
                    "required": false,
                    "description": "The ID of the featured media for the object.",
                    "type": "integer"
                },
                "comment_status": {
                    "required": false,
                    "enum": [
                        "open",
                        "closed"
                    ],
                    "description": "Whether or not comments are open on the object.",
                    "type": "string"
                },
                "ping_status": {
                    "required": false,
                    "enum": [
                        "open",
                        "closed"
                    ],
                    "description": "Whether or not the object can be pinged.",
                    "type": "string"
                },
                "format": {
                    "required": false,
                    "enum": [
                        "standard",
                        "aside",
                        "chat",
                        "gallery",
                        "link",
                        "image",
                        "quote",
                        "status",
                        "video",
                        "audio"
                    ],
                    "description": "The format for the object.",
                    "type": "string"
                },
                "meta": {
                    "required": false,
                    "description": "Meta fields.",
                    "type": "object"
                },
                "sticky": {
                    "required": false,
                    "description": "Whether or not the object should be treated as sticky.",
                    "type": "boolean"
                },
                "template": {
                    "required": false,
                    "enum": [
                        ""
                    ],
                    "description": "The theme file to use to display the object.",
                    "type": "string"
                },
                "categories": {
                    "required": false,
                    "description": "The terms assigned to the object in the category taxonomy.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "tags": {
                    "required": false,
                    "description": "The terms assigned to the object in the post_tag taxonomy.",
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                }
            }
        }
    ],
    "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "post",
        "type": "object",
        "properties": {
            "date": {
                "description": "The date the object was published, in the site's timezone.",
                "type": "string",
                "format": "date-time",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ]
            },
            "date_gmt": {
                "description": "The date the object was published, as GMT.",
                "type": "string",
                "format": "date-time",
                "context": [
                    "view",
                    "edit"
                ]
            },
            "guid": {
                "description": "The globally unique identifier for the object.",
                "type": "object",
                "context": [
                    "view",
                    "edit"
                ],
                "readonly": true,
                "properties": {
                    "raw": {
                        "description": "GUID for the object, as it exists in the database.",
                        "type": "string",
                        "context": [
                            "edit"
                        ],
                        "readonly": true
                    },
                    "rendered": {
                        "description": "GUID for the object, transformed for display.",
                        "type": "string",
                        "context": [
                            "view",
                            "edit"
                        ],
                        "readonly": true
                    }
                }
            },
            "id": {
                "description": "Unique identifier for the object.",
                "type": "integer",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ],
                "readonly": true
            },
            "link": {
                "description": "URL to the object.",
                "type": "string",
                "format": "uri",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ],
                "readonly": true
            },
            "modified": {
                "description": "The date the object was last modified, in the site's timezone.",
                "type": "string",
                "format": "date-time",
                "context": [
                    "view",
                    "edit"
                ],
                "readonly": true
            },
            "modified_gmt": {
                "description": "The date the object was last modified, as GMT.",
                "type": "string",
                "format": "date-time",
                "context": [
                    "view",
                    "edit"
                ],
                "readonly": true
            },
            "slug": {
                "description": "An alphanumeric identifier for the object unique to its type.",
                "type": "string",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ]
            },
            "status": {
                "description": "A named status for the object.",
                "type": "string",
                "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private"
                ],
                "context": [
                    "view",
                    "edit"
                ]
            },
            "type": {
                "description": "Type of Post for the object.",
                "type": "string",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ],
                "readonly": true
            },
            "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "context": [
                    "edit"
                ]
            },
            "title": {
                "description": "The title for the object.",
                "type": "object",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ],
                "properties": {
                    "raw": {
                        "description": "Title for the object, as it exists in the database.",
                        "type": "string",
                        "context": [
                            "edit"
                        ]
                    },
                    "rendered": {
                        "description": "HTML title for the object, transformed for display.",
                        "type": "string",
                        "context": [
                            "view",
                            "edit",
                            "embed"
                        ],
                        "readonly": true
                    }
                }
            },
            "content": {
                "description": "The content for the object.",
                "type": "object",
                "context": [
                    "view",
                    "edit"
                ],
                "properties": {
                    "raw": {
                        "description": "Content for the object, as it exists in the database.",
                        "type": "string",
                        "context": [
                            "edit"
                        ]
                    },
                    "rendered": {
                        "description": "HTML content for the object, transformed for display.",
                        "type": "string",
                        "context": [
                            "view",
                            "edit"
                        ],
                        "readonly": true
                    },
                    "protected": {
                        "description": "Whether the content is protected with a password.",
                        "type": "boolean",
                        "context": [
                            "view",
                            "edit",
                            "embed"
                        ],
                        "readonly": true
                    }
                }
            },
            "author": {
                "description": "The ID for the author of the object.",
                "type": "integer",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ]
            },
            "excerpt": {
                "description": "The excerpt for the object.",
                "type": "object",
                "context": [
                    "view",
                    "edit",
                    "embed"
                ],
                "properties": {
                    "raw": {
                        "description": "Excerpt for the object, as it exists in the database.",
                        "type": "string",
                        "context": [
                            "edit"
                        ]
                    },
                    "rendered": {
                        "description": "HTML excerpt for the object, transformed for display.",
                        "type": "string",
                        "context": [
                            "view",
                            "edit",
                            "embed"
                        ],
                        "readonly": true
                    },
                    "protected": {
                        "description": "Whether the excerpt is protected with a password.",
                        "type": "boolean",
                        "context": [
                            "view",
                            "edit",
                            "embed"
                        ],
                        "readonly": true
                    }
                }
            },
            "featured_media": {
                "description": "The ID of the featured media for the object.",
                "type": "integer",
                "context": [
                    "view",
                    "edit"
                ]
            },
            "comment_status": {
                "description": "Whether or not comments are open on the object.",
                "type": "string",
                "enum": [
                    "open",
                    "closed"
                ],
                "context": [
                    "view",
                    "edit"
                ]
            },
            "ping_status": {
                "description": "Whether or not the object can be pinged.",
                "type": "string",
                "enum": [
                    "open",
                    "closed"
                ],
                "context": [
                    "view",
                    "edit"
                ]
            },
            "format": {
                "description": "The format for the object.",
                "type": "string",
                "enum": [
                    "standard",
                    "aside",
                    "chat",
                    "gallery",
                    "link",
                    "image",
                    "quote",
                    "status",
                    "video",
                    "audio"
                ],
                "context": [
                    "view",
                    "edit"
                ]
            },
            "meta": {
                "description": "Meta fields.",
                "type": "object",
                "context": [
                    "view",
                    "edit"
                ],
                "properties": []
            },
            "sticky": {
                "description": "Whether or not the object should be treated as sticky.",
                "type": "boolean",
                "context": [
                    "view",
                    "edit"
                ]
            },
            "template": {
                "description": "The theme file to use to display the object.",
                "type": "string",
                "enum": [
                    ""
                ],
                "context": [
                    "view",
                    "edit"
                ]
            },
            "categories": {
                "description": "The terms assigned to the object in the category taxonomy.",
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "context": [
                    "view",
                    "edit"
                ]
            },
            "tags": {
                "description": "The terms assigned to the object in the post_tag taxonomy.",
                "type": "array",
                "items": {
                    "type": "integer"
                },
                "context": [
                    "view",
                    "edit"
                ]
            }
        }
    },
    "_links": {
        "self": "http://localhost:8888/wp-json/wp/v2/posts"
    }
};