# This is a defconfig fragment only, merge it to a real defconfig with:
# .../buildroot/support/kconfig/merge_config.sh <.config> <lima-config.frag>

BR2_TOOLCHAIN_EXTERNAL=y
BR2_ROOTFS_DEVICE_CREATION_DYNAMIC_EUDEV=y
BR2_TARGET_GENERIC_ROOT_PASSWD="root"
BR2_SYSTEM_DHCP="eth0"
BR2_ROOTFS_POST_BUILD_SCRIPT="$(BR2_EXTERNAL_LIMA_PATH)/board/lima/post-build-getty-tty1.sh"
BR2_LINUX_KERNEL_CONFIG_FRAGMENT_FILES="$(BR2_EXTERNAL_LIMA_PATH)/board/lima/lima-linux.frag"
BR2_PACKAGE_STRACE=y
BR2_PACKAGE_KMSCUBE=y
BR2_PACKAGE_MESA3D_DEMOS=y
BR2_PACKAGE_MESA3D=y
BR2_PACKAGE_MESA3D_OSMESA=y
BR2_PACKAGE_MESA3D_OPENGL_EGL=y
BR2_PACKAGE_MESA3D_OPENGL_ES=y
BR2_PACKAGE_MESA3D_OPENGL_TEXTURE_FLOAT=y
BR2_PACKAGE_XORG7=y
BR2_PACKAGE_USBUTILS=y
BR2_PACKAGE_LIBEPOXY=y
BR2_PACKAGE_DROPBEAR=y
BR2_PACKAGE_MESA3D_GALLIUM_DRIVER_LIMA=y
BR2_PACKAGE_GFX=y
BR2_PACKAGE_MESA_TEST_PROGRAMS=y
