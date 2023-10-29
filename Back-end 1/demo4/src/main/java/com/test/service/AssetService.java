package com.test.service;

import com.test.dataaccess.entity.AssetDO;
import com.test.dataaccess.mapper.AssetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetService {
    @Autowired
    private AssetMapper assetMapper;

    public AssetDO addAsset(AssetDO assetDO) {
        assetMapper.insertAsset(assetDO);
        return assetDO;

    }

    public AssetDO getAssetById(Long id) {
        return assetMapper.selectAssetById(id);
    }

    public List<AssetDO> getAllAssets() {
        return assetMapper.selectAllAssets();
    }

    public List<AssetDO> getAssetsByPage(int offset, int limit) {
        return assetMapper.selectAssetsByPage(offset, limit);
    }



    public Integer updateAsset(AssetDO assetDO) {
        return assetMapper.updateAsset(assetDO);
    }
}