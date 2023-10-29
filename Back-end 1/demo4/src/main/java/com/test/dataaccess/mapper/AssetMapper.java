package com.test.dataaccess.mapper;

import com.test.dataaccess.entity.AssetDO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
@Repository
public interface AssetMapper {

    AssetDO insertAsset(AssetDO assetDO);  // 新增资产

    AssetDO selectAssetById(@Param("id") Long id);  // 资产详情

    List<AssetDO> selectAllAssets();  // 查询所有资产

    List<AssetDO> selectAssetsByPage(@Param("offset") int offset, @Param("limit") int limit);  // 资产分页接口

    Integer updateAsset(AssetDO assetDO);  // 修改资产

}