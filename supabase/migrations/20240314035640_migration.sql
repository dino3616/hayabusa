create schema if not exists "drizzle";

create sequence "drizzle"."__drizzle_migrations_id_seq";

create table "drizzle"."__drizzle_migrations" (
    "id" integer not null default nextval('drizzle.__drizzle_migrations_id_seq'::regclass),
    "hash" text not null,
    "created_at" bigint
);


alter sequence "drizzle"."__drizzle_migrations_id_seq" owned by "drizzle"."__drizzle_migrations"."id";

CREATE UNIQUE INDEX __drizzle_migrations_pkey ON drizzle.__drizzle_migrations USING btree (id);

alter table "drizzle"."__drizzle_migrations" add constraint "__drizzle_migrations_pkey" PRIMARY KEY using index "__drizzle_migrations_pkey";


create type "public"."user_role" as enum ('admin', 'user');

create table "public"."chats" (
    "id" uuid not null default gen_random_uuid(),
    "active" boolean not null default true,
    "created_at" timestamp without time zone not null default now()
);


create table "public"."messages" (
    "id" uuid not null default gen_random_uuid(),
    "content" jsonb not null,
    "chat_id" uuid not null,
    "user_id" uuid,
    "created_at" timestamp without time zone not null default now()
);


create table "public"."users" (
    "id" uuid not null default gen_random_uuid(),
    "auth_id" uuid not null,
    "role" user_role not null default 'user'::user_role,
    "name" character varying(64) not null,
    "email" character varying(320) not null,
    "avatar_url" text not null,
    "credit" integer not null default 20,
    "created_at" timestamp without time zone not null default now()
);


CREATE INDEX chat_created_at_idx ON public.chats USING btree (created_at);

CREATE UNIQUE INDEX chats_pkey ON public.chats USING btree (id);

CREATE INDEX message_chat_id_idx ON public.messages USING btree (chat_id);

CREATE INDEX message_created_at_idx ON public.messages USING btree (created_at);

CREATE INDEX message_user_id_idx ON public.messages USING btree (user_id);

CREATE UNIQUE INDEX messages_pkey ON public.messages USING btree (id);

CREATE INDEX user_created_at_idx ON public.users USING btree (created_at);

CREATE UNIQUE INDEX users_auth_id_unique ON public.users USING btree (auth_id);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."chats" add constraint "chats_pkey" PRIMARY KEY using index "chats_pkey";

alter table "public"."messages" add constraint "messages_pkey" PRIMARY KEY using index "messages_pkey";

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."messages" add constraint "messages_chat_id_chats_id_fk" FOREIGN KEY (chat_id) REFERENCES chats(id) not valid;

alter table "public"."messages" validate constraint "messages_chat_id_chats_id_fk";

alter table "public"."messages" add constraint "messages_user_id_users_id_fk" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."messages" validate constraint "messages_user_id_users_id_fk";

alter table "public"."users" add constraint "users_auth_id_unique" UNIQUE using index "users_auth_id_unique";

grant delete on table "public"."chats" to "anon";

grant insert on table "public"."chats" to "anon";

grant references on table "public"."chats" to "anon";

grant select on table "public"."chats" to "anon";

grant trigger on table "public"."chats" to "anon";

grant truncate on table "public"."chats" to "anon";

grant update on table "public"."chats" to "anon";

grant delete on table "public"."chats" to "authenticated";

grant insert on table "public"."chats" to "authenticated";

grant references on table "public"."chats" to "authenticated";

grant select on table "public"."chats" to "authenticated";

grant trigger on table "public"."chats" to "authenticated";

grant truncate on table "public"."chats" to "authenticated";

grant update on table "public"."chats" to "authenticated";

grant delete on table "public"."chats" to "service_role";

grant insert on table "public"."chats" to "service_role";

grant references on table "public"."chats" to "service_role";

grant select on table "public"."chats" to "service_role";

grant trigger on table "public"."chats" to "service_role";

grant truncate on table "public"."chats" to "service_role";

grant update on table "public"."chats" to "service_role";

grant delete on table "public"."messages" to "anon";

grant insert on table "public"."messages" to "anon";

grant references on table "public"."messages" to "anon";

grant select on table "public"."messages" to "anon";

grant trigger on table "public"."messages" to "anon";

grant truncate on table "public"."messages" to "anon";

grant update on table "public"."messages" to "anon";

grant delete on table "public"."messages" to "authenticated";

grant insert on table "public"."messages" to "authenticated";

grant references on table "public"."messages" to "authenticated";

grant select on table "public"."messages" to "authenticated";

grant trigger on table "public"."messages" to "authenticated";

grant truncate on table "public"."messages" to "authenticated";

grant update on table "public"."messages" to "authenticated";

grant delete on table "public"."messages" to "service_role";

grant insert on table "public"."messages" to "service_role";

grant references on table "public"."messages" to "service_role";

grant select on table "public"."messages" to "service_role";

grant trigger on table "public"."messages" to "service_role";

grant truncate on table "public"."messages" to "service_role";

grant update on table "public"."messages" to "service_role";

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";


