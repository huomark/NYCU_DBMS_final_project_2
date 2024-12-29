# **SleepPeople API Specification**

## **Base URL**

```
http://localhost:3000/sleeppeople
```

---

## **Endpoints**

### **1. Create a Single Sleep Record**

**POST** `/`

- **Description**: Create a single sleep record.

- **Request Body**:
  
  ```json
  {
    "gender": "string",
    "age": number,
    "occupation": "string",
    "sleepDurationHours": number,
    "qualityOfSleep": number,
    "physicalActivityLevel": number,
    "stressLevel": number,
    "bmiCategory": "string",
    "bloodPressure": "string",
    "heartRate": number,
    "dailySteps": number,
    "sleepDisorder": "string"
  }
  ```

- **Response**:
  
  - **201 Created**: Returns the created sleep record.

---

### **2. Create Multiple Sleep Records**

**POST** `/bulk`

- **Description**: Create multiple sleep records in bulk.

- **Request Body**:
  
  ```json
  [
    {
      "gender": "string",
      "age": number,
      "occupation": "string",
      "sleepDurationHours": number,
      "qualityOfSleep": number,
      "physicalActivityLevel": number,
      "stressLevel": number,
      "bmiCategory": "string",
      "bloodPressure": "string",
      "heartRate": number,
      "dailySteps": number,
      "sleepDisorder": "string"
    }
  ]
  ```

- **Response**:
  
  - **201 Created**: Returns the number of records successfully created.

---

### **3. Get Average Sleep Duration**

**GET** `/average-sleep-duration`

- **Description**: Get the overall average sleep duration of all records.

- **Response**:
  
  ```json
  {
    "averageSleepDuration": number
  }
  ```

---

### **4. Get Average Sleep Duration by Occupation**

**GET** `/average-sleep-duration-by-occupation`

- **Description**: Get the average sleep duration for a specific occupation.

- **Query Parameters**:
  
  - `occupation` (optional, string): The occupation to filter by.

- **Response**:
  
  ```json
  {
    "averageSleepDuration": number
  }
  ```

---

### **5. Get Sleep Percentile Rank**

**GET** `/sleep-pr`

- **Description**: Get the percentile rank for a given sleep duration.

- **Query Parameters**:
  
  - `duration` (required, number): The sleep duration to calculate the percentile rank.

- **Response**:
  
  ```json
  {
    "percentileRank": number
  }
  ```

---

### **6. Get All Sleep Records**

**GET** `/`

- **Description**: Retrieve all sleep records.

- **Response**:
  
  ```json
  [
    {
      "personId": number,
      "gender": "string",
      "age": number,
      "occupation": "string",
      "sleepDurationHours": number,
      "qualityOfSleep": number,
      "physicalActivityLevel": number,
      "stressLevel": number,
      "bmiCategory": "string",
      "bloodPressure": "string",
      "heartRate": number,
      "dailySteps": number,
      "sleepDisorder": "string"
    }
  ]
  ```

---

### **7. Get a Sleep Record by ID**

**GET** `/:id`

- **Description**: Retrieve a single sleep record by its `id`.

- **Path Parameters**:
  
  - `id` (required, number): The ID of the sleep record.

- **Response**:
  
  ```json
  {
    "personId": number,
    "gender": "string",
    "age": number,
    "occupation": "string",
    "sleepDurationHours": number,
    "qualityOfSleep": number,
    "physicalActivityLevel": number,
    "stressLevel": number,
    "bmiCategory": "string",
    "bloodPressure": "string",
    "heartRate": number,
    "dailySteps": number,
    "sleepDisorder": "string"
  }
  ```

---

### **8. Update a Sleep Record by ID**

**PATCH** `/:id`

- **Description**: Update a sleep record by its `id`.

- **Path Parameters**:
  
  - `id` (required, number): The ID of the sleep record.

- **Request Body**:
  
  ```json
  {
    "gender": "string",
    "age": number,
    "occupation": "string",
    "sleepDurationHours": number,
    "qualityOfSleep": number,
    "physicalActivityLevel": number,
    "stressLevel": number,
    "bmiCategory": "string",
    "bloodPressure": "string",
    "heartRate": number,
    "dailySteps": number,
    "sleepDisorder": "string"
  }
  ```

- **Response**:
  
  ```json
  {
    "personId": number,
    "gender": "string",
    "age": number,
    "occupation": "string",
    "sleepDurationHours": number,
    "qualityOfSleep": number,
    "physicalActivityLevel": number,
    "stressLevel": number,
    "bmiCategory": "string",
    "bloodPressure": "string",
    "heartRate": number,
    "dailySteps": number,
    "sleepDisorder": "string"
  }
  ```

---

### **9. Delete a Sleep Record by ID**

**DELETE** `/:id`

- **Description**: Delete a sleep record by its `id`.
- **Path Parameters**:
  - `id` (required, number): The ID of the sleep record.
- **Response**:
  - **200 OK**: Returns confirmation of deletion.

---

### **Error Handling**

For all endpoints:

- **400 Bad Request**: Returned when a required parameter is missing or invalid.
- **404 Not Found**: Returned when the requested record does not exist.
- **500 Internal Server Error**: Returned when there is a server-side error.

---

### **Examples**

#### **Create a Sleep Record**

**Request**:

```http
POST /sleeppeople
Content-Type: application/json

{
  "gender": "Male",
  "age": 30,
  "occupation": "Engineer",
  "sleepDurationHours": 7.5,
  "qualityOfSleep": 8,
  "physicalActivityLevel": 60,
  "stressLevel": 5,
  "bmiCategory": "Normal",
  "bloodPressure": "120/80",
  "heartRate": 70,
  "dailySteps": 8000,
  "sleepDisorder": "None"
}
```

**Response**:

```json
{
  "personId": 1,
  "gender": "Male",
  "age": 30,
  "occupation": "Engineer",
  "sleepDurationHours": 7.5,
  "qualityOfSleep": 8,
  "physicalActivityLevel": 60,
  "stressLevel": 5,
  "bmiCategory": "Normal",
  "bloodPressure": "120/80",
  "heartRate": 70,
  "dailySteps": 8000,
  "sleepDisorder": "None"
}
```

#### **Get Sleep PR**

**Request**:

```http
GET /sleeppeople/sleep-pr?duration=7
```

**Response**:

```json
{
  "percentileRank": 85
}
```


