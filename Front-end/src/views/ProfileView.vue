<template>
    <el-row gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="profile-header">
            <el-avatar size="large" icon="el-icon-user"></el-avatar>
            <h3>{{ user.username }}</h3>
          </div>
          <div class="user-info">
            <div class="info-item">
              <strong>Username:</strong> {{ user.username }}
            </div>
            <div class="info-item">
              <strong>Email:</strong> {{ user.email }}
            </div>
            <div class="info-item">
              <strong>Description:</strong>
              <p>{{ user.description }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-tabs type="border-card">
          <el-tab-pane label="Purchase History">
            <el-table :data="purchaseHistory" style="width: 100%">
              <!-- Define table columns here -->
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="Shopping Cart">
            <el-table :data="shoppingCart" style="width: 100%">
              <!-- Define table columns here -->
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </template>
  
  <script>
  export default {
    name: 'ProfilePage',
    data() {
      return {
        user: {
          username: '', 
          email: '', 
          description: '',
        },
        purchaseHistory: [], 
        shoppingCart: [], 
      };
    },
    methods: {
      updateProfile() {
        console.log('Profile updated:', this.user);
      },
    },
  };
  </script>
  