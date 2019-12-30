## `users`

|Property|Schema Type|Details|
|-----------|---------|-------|
|`id`|integer|required, primary key|
|`email`|string|required, unique|
|`passwordDigest`|string|required|
|`createdAt`|datetime|required|
|`updatedAt`|datetime|required|

## `friends`

|Property|Schema Type|Details|
|-----------|---------|-------|
|`id`|integer|required, primary key|
|`name`|string|required|
|`user`|ObjectId|required, reference User model|
|`dateOfBirth`|date||
|`children`|array||
|`siblings`|array||
|`pets`|array||
|`parents`|array||
|`currentCity`|string||
|`currentCityYears`|number||
|`pastCity`|string||
|`pastCityYears`|number||
|`undergradSchool`|string||
|`undergradSchoolYears`|number||
|`gradSchool`|string||
|`gradSchoolYears`|number||
|`employmentHistory`|string||
|`currentEmploymentStatus`|string|only five options|
|`hobbies`|array||
|`notes`|string||
|`createdAt`|datetime|required|
|`updatedAt`|datetime|required|