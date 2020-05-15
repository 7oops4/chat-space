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
- has_many :rooms, through :rooms_users


## roomsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :chats
- has_many :rooms_users
- has_many :users, through :rooms_users


## chatsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|room_id|integer|null: false, foreign_key: true|

### Association
belongs_to :user
belongs_to :room


## rooms_usersテーブル

|Column|Type|Options|
|------|----|-------|
|room_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :room
- belongs_to :user
