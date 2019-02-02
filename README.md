# README

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false, funique: false|
|password|string|null: false|

### Association
- belongs_to :message
- has_many: :group_users
- has_many: :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- belongs_to: :message
- has_many :user_group
- has_many: :user


## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :user_id
- belongs_to :group_id


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
|text|string|null: false|
|image|string||

### Association
- belongs_to :group_id
- belongs_to :user_id


