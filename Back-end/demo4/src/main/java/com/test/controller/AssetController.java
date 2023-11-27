package com.test.controller;
import com.test.dataaccess.entity.AssetDO;
import com.test.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assets")

public class AssetController {
    @Autowired
    private AssetService assetService;

    @PostMapping("add")
    public ResponseEntity<AssetDO> addAsset(@RequestBody AssetDO assetDO) {
      return  ResponseEntity.ok(assetService.addAsset(assetDO));

    }

    @PostMapping("get")
    public AssetDO getAssetById(@RequestBody AssetDO assetDO) {
        return assetService.getAssetById(assetDO.getId());
    }

    @GetMapping("all")
    public List<AssetDO> getAllAssets() {
        return assetService.getAllAssets();
    }

    @GetMapping("/page")
    public List<AssetDO> getAssetsByPage(@RequestParam int offset, @RequestParam int limit) {
        return assetService.getAssetsByPage(offset, limit);
    }

    @PutMapping("/update/{id}")
    public Integer updateAsset(@PathVariable Long id, @RequestBody AssetDO assetDO) {
        assetDO.setId(id);
        return assetService.updateAsset(assetDO);
    }
}
