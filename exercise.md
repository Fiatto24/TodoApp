# Exercise

# Git Training Exercise

## วิธีการทำแบบฝึกหัด

### 1. แตก Branch Develop
```bash
git checkout main
git checkout -b develop
```

### 2. สร้าง Feature Branch
```bash
git checkout develop
git checkout -b feature/[ชื่อ-feature]
# เช่น feature/update-todo
```

### 3. พัฒนา Feature
- ทำการพัฒนา feature ให้เสร็จสมบูรณ์
- ทดสอบการทำงาน
- commit การเปลี่ยนแปลง

### 4. สร้าง Pull Request
- push code ขึ้น repository
- สร้าง Pull Request จาก feature branch ไปยัง develop
- ให้ oat หรือเพื่อนเป็นผู้ review code

---
💡 แบบฝึกหัดนี้มีไว้เพื่อฝึกการใช้งาน Git workflow เบื้องต้น
