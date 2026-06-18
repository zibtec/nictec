# Generic Home Network Security Case Study

This portfolio case study describes a non-commercial home network and lab built around defense-in-depth, network segmentation, encrypted DNS, hardware-backed MFA, and practical operational maintenance. The design intentionally avoids vendor-specific branding, private IP disclosure, secrets, exact device models, or sensitive household details.

## Architecture Summary

- Internet edge connects to a firewall/router, a managed core switch, controlled wireless access points, and separate wired/wireless zones.
- VLANs are isolated by default and treated as separate trust zones.
- Administrative and remote access require hardware-backed MFA using a YubiKey.
- DNS policy uses encrypted DNS where supported and resolver enforcement to reduce bypass risk.
- The kids/school zone uses an allowlist-first DNS model for school resources and approved education sites.
- The guest zone uses a captive portal and terms-of-use acceptance.
- IoT, media, cameras, TVs, gaming, home/trusted devices, management, and home lab systems are separated.

## Portfolio Outcome Statement

Designed and documented a standards-aligned home network security architecture using NIST CSF, selected NIST SP 800-53 controls, and CIS safeguards. The project demonstrates practical implementation of confidentiality, integrity, and availability in a non-commercial home lab through segmented VLANs, default-deny inter-zone policies, encrypted DNS, YubiKey-enabled MFA, device hardening, and lightweight operational maintenance.
