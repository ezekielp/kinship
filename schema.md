## `users`

|Property|Schema Type|Details|
|-----------|---------|-------|
|`_id`|integer|required, primary key|
|`email`|string|required, unique|
|`password`|string|required|
|`createdAt`|datetime|required|
|`updatedAt`|datetime|required|

## `friends`

|Property|Schema Type|Details|
|-----------|---------|-------|
|`_id`|integer|required, primary key|
|`name`|string|required|
|`user`|ObjectId|ref "User"|
|`dateOfBirth`|date||
|`children`|array||
|`siblings`|array||
|`pets`|array||
|`parents`|array||
|`hobbies`|array||
|`currentCity`|string||
|`currentCityYears`|number||
|`pastCity`|string||
|`pastCityYears`|number||
|`undergradSchool`|string||
|`undergradSchoolYears`|number||
|`gradSchool`|string||
|`gradSchoolYears`|number||
|`employmentHistory`|string||
|`currentEmploymentStatus`|string|five options: Self-employed, Employed, Unemployed (looking for a job), Unemployed (not looking for a job), Student |
|`notes`|string||
|`createdAt`|datetime|required|
|`updatedAt`|datetime|required|