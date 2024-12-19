'use client'
import React from 'react'
import styles from './input.module.css'

const Input = () => {
    const [isBankDropdownOpen, setIsBankDropdownOpen] = React.useState(false)
  return (
            <div style={{
                position: 'relative'
            }}>
                <input
                    onFocus={()=> setIsBankDropdownOpen(true)}
                    onBlur={()=> setIsBankDropdownOpen(false)}
                    placeholder="test"
                    style={{
                        width: "100%",
                        paddingRight: "30px", // Tambahkan ruang untuk ikon
                    }}
                />
                <div
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                }}
            >
                <span
                    className={`${styles.icon} ${isBankDropdownOpen ? styles.rotateUp : styles.rotateDown}`}
                >
                    ▼ {/* Ganti dengan ikon library jika perlu */}
                </span>
            </div>
            </div>
  )
}

export default Input