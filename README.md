# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|nickname|string|null: false, unique: true|
|password|integer|null: false, uniqueness: true, length: { minimum: 4 }|

### Association
- has_many :chats
- has_many :rooms_users


## roomsテーブル

|Column|Type|Options|
|------|----|-------|
|roomname|string|null: false, unique: true|
|users_rooms_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users_room


## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text||
|users_id|integer|null: false, foreign_key: true|

### Association
belongs_to :user


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|rooms_id|integer|null: false, foreign_key: true|
|users_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :room
- belongs_to :user
