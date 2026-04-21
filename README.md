# Project UTS Backend Programming - Kelompok 3

Proyek ini adalah RESTAPI yang dibangun menggunakan Node.js, Express.js, dan MongoDB (Mongoose) sebagai tugas Ujian Tengah Semester (UTS) Backend Programming. Mensimulasikan sistem skala mini dari LINTAR  yang mencakup user, mata kuliah, jadwal, absensi, dan nilai.

## Kelompok 3
* 535250154 - Steven Pratama
* 535250167 - Sekar Aruma Putri 
* 535250175 - Yael Rehuellah 
* 535250177 - Syafiqa Aida Purwati
* 535250159 - Sumayya Kaylani

## How to Run
1. Git Clone repo ini
2. Jalankan `npm install` untuk download semua *dependencies*.
3. Buat file `.env` dan isi dengan URI MongoDB Anda:
   `MONGO_URI=mongodb+srv://<username>:<password>@cluster0...`
   * Gunakan URI tipe Shard dengan mongodb+srv tidak jalan
        `MONGO_URI=mongodb://<username>:<password>@ac-ldqwlbd-shard-00-00.....`
4. Jalankan `npm run dev` untuk menyalakan server menggunakan nodemon.

---

## Dokumentasi API Endpoints

Berikut adalah daftar endpoint yang dapat diakses beserta input yang dibutuhkan.

### 1. Users
Mengelola data Mahasiswa dan Dosen.

* **GET `/users`**
  * **Deskripsi:** Menampilkan seluruh data pengguna.
* **GET `/users/role/:role`**
  * **Deskripsi:** Mencari pengguna berdasarkan peran.
  * **Params:** `role` (contoh: `dosen` atau `mahasiswa`)
* **POST `/users`**
  * **Deskripsi:** Mendaftarkan pengguna baru (Mahasiswa/Dosen).
  * **Body (JSON):**
    ```json
    {
      "no_induk": "535250001",
      "nama": "Agus",
      "email": "agus@kampus.edu",
      "password": "password123",
      "role": "mahasiswa" // (Pilih: 'mahasiswa' atau 'dosen')
    }
    ```
* **POST `/users/login`**
  * **Deskripsi:** Melakukan login (Pencocokan password hash).
  * **Body (JSON):**
    ```json
    {
      "email": "agus@kampus.edu",
      "password": "password123"
    }
    ```
* **DELETE `/users/:id`**
  * **Deskripsi:** Menghapus pengguna.
  * **Params:** `id` pengguna (ObjectId)

### 2. Courses (Mata Kuliah)
Mengelola data Mata Kuliah dari berbagai fakultas.

* **GET `/courses`**
  * **Deskripsi:** Menampilkan semua mata kuliah.
* **GET `/courses/:id`**
  * **Deskripsi:** Menampilkan detail satu mata kuliah.
  * **Params:** `id` mata kuliah (ObjectId)
* **POST `/courses`**
  * **Deskripsi:** Membuat mata kuliah baru.
  * **Body (JSON):**
    ```json
    {
      "nama": "Kalkulus Dasar",
      "sks": 3,
      "semester": 1,
      "fakultas": "TI", // (Sesuai enum: 'Teknik', 'Kedokteran', 'Hukum', 'TI', 'FIKOM', 'FEB', 'Psikologi')
      "link_dokumen": "[https://link-silabus-matkul.com](https://link-silabus-matkul.com)"
    }
    ```
* **PUT `/courses/:id`**
  * **Deskripsi:** Memperbarui data mata kuliah.
  * **Params:** `id` mata kuliah (ObjectId)
  * **Body:** Field yang ingin diubah (JSON).
* **DELETE `/courses/:id`**
  * **Deskripsi:** Menghapus mata kuliah.
  * **Params:** `id` mata kuliah (ObjectId)

### 3. Schedules (Jadwal Perkuliahan)
Menyambungkan Dosen dengan Mata Kuliah pada waktu tertentu.

* **GET `/schedules`**
  * **Deskripsi:** Menampilkan seluruh jadwal perkuliahan.
* **GET `/schedules/:id`**
  * **Deskripsi:** Menampilkan detail satu jadwal tertentu.
  * **Params:** `id` jadwal (ObjectId)
* **POST `/schedules`**
  * **Deskripsi:** Membuat jadwal baru.
  * **Body (JSON):**
    ```json
    {
      "course": "ID_Mata_Kuliah",
      "user": "ID_Dosen",
      "hari": "Senin",
      "jam_mulai": "08:00",
      "jam_selesai": "10:30",
      "ruangan": "Lab Komputer A"
    }
    ```
* **PUT `/schedules/:id`**
  * **Deskripsi:** Memperbarui jadwal kuliah.
  * **Params:** `id` jadwal (ObjectId)
* **DELETE `/schedules/:id`**
  * **Deskripsi:** Menghapus jadwal.
  * **Params:** `id` jadwal (ObjectId)

### 4. Attendances (Absensi)
Mengelola pencatatan kehadiran Mahasiswa pada suatu Jadwal.

* **POST `/attendances`**
  * **Deskripsi:** Mencatat kehadiran mahasiswa (mencegah absen ganda di hari yang sama).
  * **Body (JSON):**
    ```json
    {
      "user": "ID_Mahasiswa",
      "schedule": "ID_Jadwal",
      "date": "2023-12-01", 
      "status": "Hadir" // (Pilih: 'Hadir', 'Izin', atau 'Alpa')
    }
    ```
* **GET `/attendances/schedule/:scheduleId`**
  * **Deskripsi:** Melihat rekap absen seluruh mahasiswa pada satu jadwal kelas (Untuk dosen).
  * **Params:** `scheduleId` (ObjectId jadwal)
* **GET `/attendances/user/:userId`**
  * **Deskripsi:** Melihat riwayat absen lengkap milik satu mahasiswa (Untuk mahasiswa).
  * **Params:** `userId` (ObjectId mahasiswa)

### 5. Grades (Nilai)
Pencatatan rekap nilai mahasiswa. (Nilai Akhir akan dikalkulasi otomatis oleh sistem).

* **POST `/grades`**
  * **Deskripsi:** Menginput nilai UTS dan UAS mahasiswa.
  * **Body (JSON):**
    ```json
    {
      "studentId": "ID_Mahasiswa",
      "courseId": "ID_Mata_Kuliah",
      "nilai_uts": 85,
      "nilai_uas": 90
    }
    ```
* **GET `/grades/student/:studentId`**
  * **Deskripsi:** Menampilkan riwayat/KHS (Kartu Hasil Studi) nilai milik seorang mahasiswa.
  * **Params:** `studentId` (ObjectId mahasiswa)